import { useEffect } from "react";

const AdsComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pl29141852.profitablecpmratenetwork.com/5e/13/89/5e1389ba714814210d9d81751ffdb520.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100px" }}>
      {/* Ad will render here */}
    </div>
  );
};

export default AdsComponent;
