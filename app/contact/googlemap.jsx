
export default function GoogleMap() {
  return (
    <section className="google-map-section">
      <div className="google-map-container">
        <iframe
          src="https://www.google.com/maps?q=Jogeshwari,Mumbai,Maharashtra,India&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}