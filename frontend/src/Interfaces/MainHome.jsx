import React from "react";
import PageHeader from "../components/Main-Home/Page-Header";
import StatsRow from "../components/Main-Home/StatsRow";
import ActiveConsultationBanner from "../components/Main-Home/ActiveConsultationBanner";
import ConsultationZone from "../components/Main-Home/ConsultationZone";
import DoctorsSection from "../components/Main-Home/DoctorsSection";

const MainHome = ({
  showToast,
  today,
  czTab,
  setCzTab,
  specialty,
  setSpecialty,
  filteredDoctors,
  setModal,
  setSelectedSlot,
  confirmBooking,
  modal,
  selectedSlot,
}) => {
  return (
    <div className="db-body">
      {/* page header */}
      <PageHeader showToast={showToast} today={today} />

      {/* stats row */}
      <StatsRow />

      {/* active consultation banner */}
      <ActiveConsultationBanner />

      {/* consultation zone */}
      <ConsultationZone
        czTab={czTab}
        setCzTab={setCzTab}
        showToast={showToast}
      />

      {/* doctors section */}
      <DoctorsSection
        specialty={specialty}
        setSpecialty={setSpecialty}
        filteredDoctors={filteredDoctors}
        setModal={setModal}
        setSelectedSlot={setSelectedSlot}
        confirmBooking={confirmBooking}
        modal={modal}
        selectedSlot={selectedSlot}
      />
    </div>
  );
};

export default MainHome;
