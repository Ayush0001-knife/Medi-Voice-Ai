import { useState, useEffect, useRef } from "react";
import "../styles/MainHistory.css";
import HISTORY_DATA from "../data/Main-History/history-data.js";
import HeroStrip from "../components/Main-History/HeroStrip.jsx";
import SummaryStrip from "../components/Main-History/SummaryStrip.jsx";
import Filters from "../components/Main-History/Filters.jsx";
import Timeline from "../components/Main-History/Timeline.jsx";
import DetailModal from "../components/Main-History/DetailModal.jsx";

export default function MainHistory() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
    return () => document.head.removeChild(s);
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const allItems = HISTORY_DATA.flatMap((g) => g.items);
  const total = allItems.length;
  const done = allItems.filter((i) => i.status === "done").length;

  const upcoming = allItems.filter(
    (i) => i.status === "upcoming" || i.status === "pending",
  ).length;

  const avgRating = (
    allItems.filter((i) => i.rating > 0).reduce((a, b) => a + b.rating, 0) /
      allItems.filter((i) => i.rating > 0).length || 0
  ).toFixed(1);

  const filtered = HISTORY_DATA.map((g) => ({
    ...g,
    items: g.items.filter((item) => {
      const matchFilter = filter === "All" || item.statusLabel === filter;
      const matchSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.spec.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    }),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <div className="page">
        {/* HERO STRIP */}
        <HeroStrip
          total={total}
          done={done}
          upcoming={upcoming}
          avgRating={avgRating}
        />

        {/* SUMMARY STRIP */}
        <SummaryStrip
          total={total}
          done={done}
          upcoming={upcoming}
          avgRating={avgRating}
        />

        {/* FILTERS */}
        <Filters
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />

        {/* TIMELINE */}
        <Timeline filtered={filtered} setModal={setModal} />
      </div>

      {/* DETAIL MODAL */}
      <DetailModal modal={modal} setModal={setModal} showToast={showToast} />

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
