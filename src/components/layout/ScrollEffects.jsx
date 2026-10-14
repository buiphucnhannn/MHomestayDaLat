"use client";

import { useEffect } from "react";

// Site-wide motion:
// 1. Scroll reveal — every [data-reveal] element animates in when it enters the viewport and resets once it
//    has fully left, so the effect replays scrolling down or up, on first load or long after.
//    Optional data-reveal-delay="120" staggers siblings.
// (In-page links are handled by components/fx/SmoothScroll.js — Lenis.)
export default function ScrollEffects() {
  useEffect(() => {
    window.__revealReady = true;

    // --- Scroll reveal ---------------------------------------------------------------
    // Runs regardless of prefers-reduced-motion: Windows reports "reduce" whenever its Animation effects
    // setting is off, which would silently disable the site's motion for many visitors.
    let showObserver = null;
    let hideObserver = null;
    let mutationObserver = null;

    {
      // Reveal a little after the element's top crosses the bottom edge, so the motion is actually seen
      showObserver = new IntersectionObserver(
        (entries) => {
          for (const { target, isIntersecting } of entries) {
            if (isIntersecting) target.classList.add("is-revealed");
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0 }
      );
      // Reset only when completely off-screen, so nothing blinks while still partly visible
      hideObserver = new IntersectionObserver(
        (entries) => {
          for (const { target, isIntersecting } of entries) {
            if (!isIntersecting) target.classList.remove("is-revealed");
          }
        },
        { threshold: 0 }
      );

      // Track watched nodes outside the DOM, so React-managed attributes stay untouched
      const watched = new WeakSet();
      const watch = (el) => {
        if (watched.has(el)) return;
        watched.add(el);
        const delay = el.getAttribute("data-reveal-delay");
        if (delay) el.style.setProperty("--rd", `${delay}ms`);
        showObserver.observe(el);
        hideObserver.observe(el);
      };
      document.querySelectorAll("[data-reveal]").forEach(watch);

      // Elements mounted later (room switch, gallery filter, modals...) join automatically
      mutationObserver = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const node of m.addedNodes) {
            if (node.nodeType !== 1) continue;
            if (node.matches("[data-reveal]")) watch(node);
            node.querySelectorAll?.("[data-reveal]").forEach(watch);
          }
        }
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      showObserver?.disconnect();
      hideObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return null;
}
