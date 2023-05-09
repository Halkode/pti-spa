import HeaderSquareItems from "../../molecule/HeaderSquareItems";
import SquareItem from "../../molecule/SquareItem";

function SquareItems({
  headerTitle,
  headerSubtitle,
  posts
}) {
  return (
    <section class="container mx-auto mt-6">
      <HeaderSquareItems
        title={headerTitle}
        subtitle={headerSubtitle}
      />
      <div class="grid grid-cols-3 gap-12 mt-10">
        {posts.map((post, index) => (
          <div key={`item-${index}`} >
            <SquareItem
              {...post}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SquareItems;
