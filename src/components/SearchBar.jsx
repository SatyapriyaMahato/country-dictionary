import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";

function SearchBar({ dropDown, show, showDetails }) {
  return (
    <>
      <div className="search-bar container">
        <div
          className="back-btn active"
          onClick={() => {
            showDetails();
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </span>
          <span>Back</span>
        </div>
        <div className={`search-bar__wrapper`}>
          <div className="left">
            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              className="search-field"
              type="text"
              placeholder="Serach for a country"
            />
          </div>
          <div className="right">
            <div
              className="dropdown"
              onClick={() => {
                dropDown();
              }}
            >
              <span
                className="toggle-menu"
                onClick={() => {
                  show("Filter by Region");
                }}
              >
                Filter by Region
              </span>
              <div className="options">
                <div
                  className="option"
                  onClick={() => {
                    show("Africa");
                  }}
                >
                  Africa
                </div>
                <div
                  className="option"
                  onClick={() => {
                    show("America");
                  }}
                >
                  America
                </div>
                <div
                  className="option"
                  onClick={() => {
                    show("Asia");
                  }}
                >
                  Asia
                </div>
                <div
                  className="option"
                  onClick={() => {
                    show("Asia");
                  }}
                >
                  Europe
                </div>
                <div
                  className="option"
                  onClick={() => {
                    show("Oceania");
                  }}
                >
                  Ocenia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;