export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-card-border px-10 py-5">
      <div>
        <h1 className="text-xl font-medium text-primary">Sales Overview</h1>
        <p className="text-xs text-primary">Monitor all your content activity</p>
      </div>

      <div className="flex items-center gap-1.5">
        <span>Search</span>
        <span>Notification</span>
        <span>Filter</span>

        <hr className="mx-5 w-4 rotate-90 border-icon-border" />

        <div className="flex items-center gap-3">
          <div className="relative size-9">
            <img
              alt="Avatar"
              className="min-h-[36px] min-w-[36px] rounded-full object-cover"
              height="36px"
              src="/assets/images/profile-image.png"
              width="36px"
            />
            <span className="absolute right-0 bottom-0 inline-block size-2.5 rounded-full bg-[#339C50] outline-2 outline-white"></span>
          </div>
          <div className="min-w-40 basis-full">
            <h6 className="text-base font-medium text-primary">Amiril Mu`</h6>
            <span className="text-xs text-primary">amirilmu@mail.com</span>
          </div>
          <span>Arrow Down</span>
        </div>
      </div>
    </header>
  );
}
