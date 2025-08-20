function ComponentContainer({
  component,
  index,
  startFrom = 1,
  descriptionStyle,
}) {
  return (
    <div className={`${component.style} `}>
      <div className="w-8 h-8 rounded-[16px] bg-accent grid place-items-center text-white mb-3">
        {index + startFrom}
      </div>
      <div className="mb-2">
        <h3 className="text-2xl font-bold leading-none md:text-4xl">
          {component.title}
        </h3>
        <p className="text-lg leading-none md:text-2xl">{component.subtitle}</p>
      </div>
      <p className={`text-sm text-accent md:text-base ${descriptionStyle}`}>
        {component.description}
      </p>
    </div>
  );
}

export default ComponentContainer;
