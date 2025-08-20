function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-4xl">{title}</h2>
      <p className="text-lg leading-none text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;
