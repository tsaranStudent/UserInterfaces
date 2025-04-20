import { useEffect, useState } from "react";

function Footer() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="mt-4 py-2 bg-dark text-white">
            <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row text-center text-md-start">

                {/* Lewa strona - tekst stały */}
                <p className="mb-0">
                    © {new Date().getFullYear()} System ERP. Wszelkie prawa zastrzeżone. Projekt interfejsu TSaran
                </p>

                {/* Prawa strona - data i godzina */}
                <small className="mb=0">
                    {currentDateTime.toLocaleDateString("pl-PL", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}, {currentDateTime.toLocaleTimeString("pl-PL")}
                </small>

            </div>
        </footer>

    );
}

export default Footer;