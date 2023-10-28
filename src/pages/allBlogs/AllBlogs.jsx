import { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";

function AllBlogs() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">
          {/* Top Heading  */}
          <div className="mb-5">
            <h1
              className=" text-center text-2xl font-bold"
              style={{ color: mode === "dark" ? "white" : "black" }}
            >
              All Blogs
            </h1>
          </div>
          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {getAllBlog.length > 0 ? (
              getAllBlog.map((item, index) => {
                const { date, thumbnail, blogs } = item;
                // console.log(item);
                return (
                  <div key={index} className="p-4 md:w-1/3">
                    <div
                      style={{
                        background:
                          mode === "dark" ? "rgb(30, 41, 59)" : "white",
                        borderBottom:
                          mode === "dark"
                            ? " 4px solid rgb(226, 232, 240)"
                            : " 4px solid rgb(30, 41, 59)",
                      }}
                      className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                ${
                                  mode === "dark"
                                    ? "shadow-gray-700"
                                    : "shadow-xl"
                                } 
                                rounded-xl overflow-hidden`}
                    >
                      {/* Blog Thumbnail  */}
                      <img className=" w-full" src={thumbnail} alt="blog" />

                      {/* Top Items  */}
                      <div className="p-6">
                        {/* Blog Date  */}
                        <h2
                          className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                          style={{
                            color:
                              mode === "dark"
                                ? "rgb(226, 232, 240)"
                                : " rgb(30, 41, 59)",
                          }}
                        >
                          {date}
                        </h2>

                        {/* Blog Title  */}
                        <h1
                          className="title-font text-lg font-bold text-gray-900 mb-3"
                          style={{
                            color:
                              mode === "dark"
                                ? "rgb(226, 232, 240)"
                                : " rgb(30, 41, 59)",
                          }}
                        >
                          {blogs.title}
                        </h1>

                        {/* Blog Description  */}
                        <p
                          className="leading-relaxed mb-3"
                          style={{
                            color:
                              mode === "dark"
                                ? "rgb(226, 232, 240)"
                                : " rgb(30, 41, 59)",
                          }}
                        >
                          blogs.constant
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <h1>There is no blog.</h1>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AllBlogs;