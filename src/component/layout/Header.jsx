import React from "react";
import Icon from "@mdi/react";
import { mdiCameraEnhanceOutline } from "@mdi/js";

//Get svg as components
import { ReactComponent as InboxLogo } from "../../asset/svg/inbox.svg";
import { ReactComponent as ExploreLogo } from "../../asset/svg/explore.svg";
import { ReactComponent as ShopLogo } from "../../asset/svg/shop.svg";
import { ReactComponent as CategoryLogo } from "../../asset/svg/category.svg";
import { ReactComponent as SearchLogo } from "../../asset/svg/search.svg";
//Load user images
import user from "../../asset/img/user-icon.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="nav-left">
        <ul className="tabs">
          <li className="tab active orange">
            <ExploreLogo fill="#fa6252" />
            <span>Explore</span>
          </li>
          <li className="tab yellow">
            <CategoryLogo fill="#febd02" />
            <span>Category</span>
          </li>
          <li className="tab blue has-badge">
            <InboxLogo fill="#06aaff" />
            <span>
              <span>Inbox</span>
              <span className="badge">8</span>
            </span>
          </li>
          <li className="tab pink">
            <ShopLogo fill="#fd2c56" />
            <span>Shop</span>
          </li>
        </ul>
      </div>
      <div className="nav-center">
        <div className="nav-logo">
          <Icon
            path={mdiCameraEnhanceOutline}
            title="Logo"
            size={1}
            color="#FD2C56"
          />
          <span className="text-2xl font-medium">Camero</span>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-right-items">
          <div className="search-container group">
            <input
              type="text"
              className="search-input"
              placeholder="Search here"
            />
            <button className="search-button">
              <SearchLogo fill="#6c6c6c" />
            </button>
          </div>
          <div className="avatar">
            <img src={user} alt="user" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
