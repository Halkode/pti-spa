function HeaderSquareItems({
  title,
  subtitle,
}) {
  return (
    <div class="grid">
      {title && <h3 class="grid-cols-12 justify-center text-center">{title}</h3>}
      {subtitle && <p class="grid-cols-12 justify-center text-center">{subtitle}</p>}
    </div>
  );
}

export default HeaderSquareItems;
