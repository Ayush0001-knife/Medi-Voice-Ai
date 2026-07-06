import React from "react";

const ConfirmModal = ({ confirmModal, setConfirmModal, showToast }) => {
  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && setConfirmModal(null)}
    >
      <div className="modal">
        <div className="modal-icon">
          {confirmModal === "signout"
            ? "🚪"
            : confirmModal === "delete"
              ? "🗑️"
              : "❌"}
        </div>
        <div className="modal-title">
          {confirmModal === "signout"
            ? "Sign out?"
            : confirmModal === "delete"
              ? "Delete Account?"
              : "Cancel Plan?"}
        </div>
        <div className="modal-sub">
          {confirmModal === "signout"
            ? "You'll need to log in again to access your account."
            : confirmModal === "delete"
              ? "This action is permanent and cannot be undone. All your data will be lost."
              : "You'll lose access to all specialist doctors and premium features."}
        </div>
        <div className="modal-actions">
          <button
            className="modal-cancel"
            onClick={() => setConfirmModal(null)}
          >
            Go Back
          </button>
          <button
            className="modal-confirm-red"
            onClick={() => {
              setConfirmModal(null);
              showToast(
                confirmModal === "signout"
                  ? "Signed out successfully"
                  : confirmModal === "delete"
                    ? "Account deleted"
                    : "Plan cancelled",
              );
            }}
          >
            {confirmModal === "signout"
              ? "Sign Out"
              : confirmModal === "delete"
                ? "Delete"
                : "Cancel Plan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
