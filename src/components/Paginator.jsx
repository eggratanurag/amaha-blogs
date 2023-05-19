import React from 'react';

const Paginator = React.memo(({page, setPage, data, blogData}) => {

  function changePage (type) {
    setPage(prev=> type === "next" ? prev + 1 : prev - 1), 
    window.scrollTo({top: 0, left: 0});
  }

    return (
        <div className='py-12' aria-label="Page navigation example">
        <ul className="flex items-center justify-center h-12 list-none">
          <li>
            <button onClick={()=> changePage("previous")}  disabled={(data?.page == 1 || !blogData?.length)} 
            className="block px-3 py-2 ml-0 cursor-pointer leading-tight bg-white text-gray-700 rounded-l-lg outline outline-1 outline-slate-300 hover:text-yellow disabled:text-gray-400">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </li>
         
          <li>
            <button onClick={()=> changePage("next")} disabled={page == data?.total_page || !blogData?.length}
             className="block px-3 py-2 leading-tight  cursor-pointer rounded-r-lg text-gray-700 bg-white outline outline-1 outline-slate-300 hover:text-yellow disabled:text-gray-400">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>
          </li>
        </ul>
      </div>
    );
})

export default Paginator;
