import React from 'react';
import { useRouter } from 'next/router';

const WHATSAPP_NUMBER = '971507706746';

const WhatsAppButton = () => {
    const router = useRouter();
    const isAr = router.locale === 'ar';
    const message = isAr
        ? 'مرحبا، بدي معلومات عن Linkaza'
        : "Hi, I'd like to know more about Linkaza";
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="lz-whatsapp"
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppButton;
