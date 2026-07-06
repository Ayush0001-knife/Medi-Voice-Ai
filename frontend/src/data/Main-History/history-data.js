export default [
  {
    id: 1,
    month: "July 2026",
    items: [
      {
        id: 101,
        name: "Dr. Priya Nair",
        spec: "Dermatology",
        emoji: "🔬",
        date: "Jul 1, 2026 · 2:00 PM",
        status: "upcoming",
        statusLabel: "Upcoming",
        notes:
          "Follow-up on recurring eczema patches. Advised to continue hydrocortisone cream.",
        tags: [
          { l: "Eczema", c: "blue" },
          { l: "Follow-up", c: "green" },
        ],
        rating: 0,
        premium: true,
        prescriptions: [
          { name: "Hydrocortisone 1%", dose: "Twice daily" },
          { name: "Cetaphil Lotion", dose: "After shower" },
        ],
      },
      {
        id: 102,
        name: "Dr. James Carter",
        spec: "General Physician",
        emoji: "👨‍⚕️",
        date: "Jul 5, 2026 · 10:00 AM",
        status: "pending",
        statusLabel: "Pending",
        notes:
          "Routine check-up scheduled. Blood pressure monitoring required.",
        tags: [
          { l: "Check-up", c: "amber" },
          { l: "BP Monitor", c: "blue" },
        ],
        rating: 0,
        premium: false,
        prescriptions: [],
      },
    ],
  },
  {
    id: 2,
    month: "June 2026",
    items: [
      {
        id: 103,
        name: "Dr. Arun Mehta",
        spec: "Cardiology",
        emoji: "🫀",
        date: "Jun 28, 2026 · 9:00 AM",
        status: "done",
        statusLabel: "Completed",
        notes:
          "ECG results normal. Mild palpitations likely stress-induced. Recommended lifestyle changes and light cardio 4x/week.",
        tags: [
          { l: "ECG Normal", c: "green" },
          { l: "Lifestyle", c: "purple" },
          { l: "Cardiology", c: "blue" },
        ],
        rating: 5,
        premium: true,
        prescriptions: [
          { name: "Metoprolol 25mg", dose: "Once daily" },
          { name: "Omega-3", dose: "With dinner" },
        ],
      },
      {
        id: 104,
        name: "Dr. Emily Wong",
        spec: "Pediatrics",
        emoji: "👶",
        date: "Jun 20, 2026 · 11:30 AM",
        status: "done",
        statusLabel: "Completed",
        notes:
          "Child vaccination schedule reviewed. MMR booster administered. Next appointment in 3 months.",
        tags: [
          { l: "Vaccination", c: "green" },
          { l: "MMR", c: "amber" },
        ],
        rating: 4,
        premium: false,
        prescriptions: [{ name: "Paracetamol 250mg", dose: "If fever > 38°C" }],
      },
      {
        id: 105,
        name: "Dr. Liam Brooks",
        spec: "Neurology",
        emoji: "🧠",
        date: "Jun 14, 2026 · 4:00 PM",
        status: "cancelled",
        statusLabel: "Cancelled",
        notes: "Appointment was rescheduled due to patient unavailability.",
        tags: [{ l: "Rescheduled", c: "amber" }],
        rating: 0,
        premium: true,
        prescriptions: [],
      },
    ],
  },
  {
    id: 3,
    month: "May 2026",
    items: [
      {
        id: 106,
        name: "Dr. Sarah Kim",
        spec: "Psychiatry",
        emoji: "🧘‍♀️",
        date: "May 22, 2026 · 3:00 PM",
        status: "done",
        statusLabel: "Completed",
        notes:
          "CBT session completed. Anxiety levels reducing. Sleep hygiene exercises recommended. Journaling suggested daily.",
        tags: [
          { l: "CBT", c: "purple" },
          { l: "Anxiety", c: "amber" },
          { l: "Progress", c: "green" },
        ],
        rating: 5,
        premium: true,
        prescriptions: [
          { name: "Sertraline 50mg", dose: "Morning daily" },
          { name: "Melatonin 3mg", dose: "Before bed" },
        ],
      },
      {
        id: 107,
        name: "Dr. James Carter",
        spec: "General Physician",
        emoji: "👨‍⚕️",
        date: "May 8, 2026 · 9:30 AM",
        status: "done",
        statusLabel: "Completed",
        notes:
          "Annual physical exam completed. All vitals normal. Cholesterol slightly elevated — dietary changes advised.",
        tags: [
          { l: "Annual Exam", c: "green" },
          { l: "Cholesterol", c: "amber" },
        ],
        rating: 4,
        premium: false,
        prescriptions: [{ name: "Atorvastatin 10mg", dose: "Before bed" }],
      },
    ],
  },
];