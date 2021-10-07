import React from "react";


function sidebar(){
    return(
        <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="sidebar-sticky pt-3">
              <ul class="nav flex-column">
                
                <li class="nav-item">
                  <a class="nav-link" href="/feed">
                    <span data-feather="feed"></span>
                    Feed
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/studio">
                    <span data-feather="studio"></span>
                    Studio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/inbox">
                    <span data-feather="users"></span>
                    Messages
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/artist">
                    <span data-feather="bar-chart-2"></span>
                    Saved Artists
                  </a>
                </li>
              </ul>

              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="/cart">
                    <span data-feather="file-text"></span>
                    Shopping Cart
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/orders">
                    <span data-feather="file-text"></span>
                    Orders
                  </a>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
      </div>
    )
}

export default sidebar;