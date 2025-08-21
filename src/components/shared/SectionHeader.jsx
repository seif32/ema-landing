function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl sm:text-2xl md:text-4xl lg:w-5xl">{title}</h2>
      <p className="leading-none md:text-lg text-md text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionHeader;
