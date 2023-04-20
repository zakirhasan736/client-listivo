import Link from "next/link";
import Image from "next/image";

function EmptyItem({
  title = "No Listings Found",
  text = "There's nothing here right now. Why don't you try a different search or change your location?",
  buttonLabel,
  buttonLink = "/",
}) {
  return (
    <div className="empty-item-cmp">
      <Image
        src={"/image/empty-items.svg"}
        width={200}
        height={130}
        preview={false}
        alt="image"
      />
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      {buttonLabel && (
        <Link href={buttonLink} className="btn">
          {buttonLabel}
        </Link>
      )}
    </div>
  );
}

export default EmptyItem;
