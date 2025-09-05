"use client";

import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

export default function ContactFormModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      onClose();
    }, 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-3 sm:px-0">
      <div
        className="
          relative bg-[#373737] rounded-[16px] sm:rounded-[24px]
          shadow-2xl border border-white/10
          flex flex-col gap-[24px] sm:gap-[32px]
          w-full max-w-[659px]
          h-[90vh] sm:h-[711.5px]
          overflow-y-auto sm:overflow-visible
          p-[20px] sm:p-[32px]
        "
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-300 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Section gauche (titre + description) */}
        <div
          className="
            flex flex-col gap-[10px]
            w-full sm:w-[594px]
          "
        >
          <h1 className="text-[24px] sm:text-[40px] leading-[32px] sm:leading-[48px] font-light text-[#D4A574]">
            Prenez rendez-vous avec <br className="hidden sm:block" /> nos experts !
          </h1>
          <p className="text-[#A3A3A3] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px]">
            Que vous soyez partenaire, investisseur, membre, que vous ayez besoin
            d’informations supplémentaires sur UpAfrica, nos services, nos
            opportunités ou simplement intéressé par nos initiatives, n’hésitez
            pas à nous écrire en remplissant ce formulaire ci-présent et nous
            reviendrons vers vous dans les plus brefs délais. Nous serons ravis
            d’échanger avec vous.
          </p>
        </div>

        {/* Section droite (formulaire) */}
        <div
          className="
            flex flex-col gap-[24px] sm:gap-[30px]
            w-full sm:w-[595px]
          "
        >
          {/* Nom + Prénom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[32px]">
            <div>
              <label className="block text-[#D4A574] text-[14px] mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-500 focus:border-gray-300 outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-[#D4A574] text-[14px] mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-500 focus:border-gray-300 outline-none py-1"
              />
            </div>
          </div>

          {/* Email + Téléphone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[32px]">
            <div>
              <label className="block text-[#D4A574] text-[14px] mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-500 focus:border-gray-300 outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-[#D4A574] text-[14px] mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-gray-500 focus:border-gray-300 outline-none py-1"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#D4A574] text-[14px] mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-transparent text-white border-b border-gray-500 focus:border-gray-300 outline-none resize-none py-1"
              placeholder="Taper votre message"
            />
          </div>
        </div>

        {/* Bouton envoyer */}
        <div className="mt-auto">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || isSubmitted}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-[12px] font-medium text-white 
                       bg-[#FF7A1A] hover:opacity-90 disabled:opacity-70 
                       shadow-[0_0_20px_rgba(255,122,26,0.6)] w-full sm:w-auto"
          >
            {isSubmitting
              ? "Envoi..."
              : isSubmitted
              ? "Message envoyé !"
              : (
                <>
                  Envoyer <ArrowRight size={18} />
                </>
              )}
          </button>
        </div>
      </div>
    </div>
  );
}




