const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex items-center gap-7">
            <a href="#beranda">Home</a>
            <a href="#tentang">About Me</a>
            <a href="#proyek">Projects</a>
        </div>
        <div className="flex items-center gap-3">
            <a 
            href="https://github.com/SalmanZulkarnain"
            target="_blank"
            rel="noopener noreferrer"
            >
                <i className="ri-github-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer