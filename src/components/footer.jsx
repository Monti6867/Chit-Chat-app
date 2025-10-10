function Footer() {
  return (
    <footer style={{ padding: "1rem", backgroundColor: "#282c34", color: "#fff", marginTop: "auto" }}>
      <p>© 2025 My Website. All rights reserved.</p>

      {/*---------header-------------- */}
       <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt="" className='w-8 rounded-full'/>
        <p className='felx-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img onClick={()=> selectedUser(null)}src={assets.arrow_icon} alt="" className='md:hidden max-w-7'/>
        <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5'/>
       </div>
    </footer>
  );
}

export default Footer;
