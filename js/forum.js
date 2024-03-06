const loadPosts = async (category) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    const data = await res.json();
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    data.posts.forEach((post) => {
  
      document.getElementById('loading-spinner').style.display = "none";
  
      const div = document.createElement('div');
      div.innerHTML = `
          <div class="bg-[#F2F2FF] rounded-xl p-5 my-5 w-full">
          <div class="indicator flex flex-col lg:flex-row items-center justify-center lg:items-start">
            <span id="activity-checker" class="indicator-item badge badge-secondary relative left-12 top-5 lg:left-32 lg:top-0 ${post.isActive ? 'bg-green-500': 'bg-red-500'}"></span>
            <div class="grid w-32 h-32 bg-base-300 place-items-center">
            <img class="rounded-xl" src="${post.image}" alt="">
            </div>
            <div class="space-y-5 pl-5">
              <div class="flex gap-2 items-center justify-center lg:justify-start">
                <h6 class="font-inter text-[#12132DCC] font-medium">#${post.category}</h6>
              <h6 class="font-inter text-[#12132DCC] font-medium">Author : ${post.author.name}</h6>
              </div>
              <div class="max-w-96 lg:max-w-full">
              <h5 class="font-mulish text-[#12132D] font-bold">${post.title}</h5>
              <p class="text-[#12132D99] font-inter">${post.description}</p>
              </div>
              <hr class="border-dashed border-[#12132D40]">
              <div class="flex gap-20 lg:gap-60">
                <div class="flex gap-3">
                  <div class="flex gap-3 justify-center items-center">
                    <img src="/images/tabler-icon-message-2.svg" alt="">
                    <h6>${post.comment_count}</h6>
                  </div>
                  <div class="flex gap-3 justify-center items-center">
                    <img src="/images/tabler-icon-eye.svg" alt="">
                    <h6>${post.view_count}</h6>
                  </div>
                  <div class="flex gap-3 justify-center items-center">
                    <img src="/images/tabler-icon-clock-hour-9.svg" alt="">
                    <h6>${post.posted_time}</h6>
                  </div>
                </div>
                <div class="btn bg-[#F2F2FF]">
                   <img src="/images/email 1.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
          `;
      postsContainer.appendChild(div);
    });

};

const latestPosts = async () => {

    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    data.forEach((data) => {
  
      const latestPostContainer = document.getElementById('latest-post-container')
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="card w-[400px] bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                <img src="${data.cover_image}" alt="Shoes" class="rounded-xl" />
              </figure>
              <div class="card-body">
                <h6 class="font-mulish text-[#12132D99]"><i class="fa-regular fa-calendar-days mr-2"></i>${data?.author?.posted_date || 'No Publish Date'}</h6>
                <h2 class="card-title text-[#12132D] font-semibold">${data.title}</h2>
                <p class="font-mulish text-[#12132D99]">${data.description.slice(0, 80)}</p>
                <div class="flex gap-2">
                  <div class="w-12">
                      <img class="rounded-full" src="${data.profile_image}" alt="">
                  </div>
                  <div>
                    <h6 class="text-[#12132D] font-mulish font-bold">${data.author.name}</h6>
                    <p class="text-[#12132D99]">${data?.author?.designation || 'No Designation'}</p>
                  </div>
                </div>
              </div>
            </div>
      `;
      latestPostContainer.appendChild(div);
    });
  
  };


  const handleSearch = async () => {
    document.getElementById('loading-spinner').style.display = "block";
    const value = document.getElementById('search-box').value;
    if (value) {
      loadPosts(value)
    }
    else {
      alert("please enter a valid category");
    }
  }
  
  
  
  
  latestPosts();
  loadPosts("");