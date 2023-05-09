function SquareItem({ url, image, title, resume }) {
  return (
    <div>
      <div>
        <img 
            alt={title} 
            src={`${image}`} 
            class="rounded-lg max-h-64 w-full object-cover"
        />
      </div>
      <div>
        {title && 
            <h3 class="pt-6 font-bold">{title}</h3>
        }
        {resume && (
          <p
            class="opacity-75"
            dangerouslySetInnerHTML={{ __html: resume }}
          />
        )}
        {url && (
          <a
            href={`${url}`}
          >
            Leia mais...
          </a>
        )}
      </div>
    </div>
  );
}
export default SquareItem;