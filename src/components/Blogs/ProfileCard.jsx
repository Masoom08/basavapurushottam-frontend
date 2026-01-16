function ProfileCard() {
  return (
    <CardWrapper>
      <div className="flex flex-col items-center text-center">
        <img
          src="https://basavapurushottam.com/wp-content/uploads/2024/04/cropped-bvv1.jpg"
          className="w-32 h-32 rounded-full mb-4 object-cover"
        />

        <h3 className="text-lg font-semibold tracking-wide">
          MY BLOG
        </h3>

        <div className="flex gap-4 mt-4 text-xl">
          <span>f</span>
          <span>x</span>
          <span>in</span>
        </div>
      </div>
    </CardWrapper>
  );
}
