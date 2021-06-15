import React, { Component } from "react";
import "./App.css";
import SearchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
// helpers
import scrollGallery from "./helpers/scroll"
import apiService from "./helpers/apiService";

class App extends Component {
  state = {
    page: 1,
    query: '',
    pictures: [],
    isModalOpen: false,
    modalImg: ""
  }

  handleSetQuery = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleGetPictures = async (e) => {
    e.preventDefault()
    const { page, query } = this.state
    const resp = await apiService(query, page)
    this.setState({
      pictures: resp.data.hits
    })
  }

  handleOpenModal = (e) => {
    this.setState({
      isModalOpen: true,
      modalImg: e.target.dataset.source
    });
  }

  handleCloseModal = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.setState({
        isModalOpen: false,
        modalImg: "",
      });
    }
  }

  handleLoadMore = async () => {
    const { page, query } = this.state;
    const resp = await apiService(query, page +1);
    this.setState((prev) => ({
      pictures: [...prev.pictures, ...resp.data.hits],
      page: prev.page +1
    }));
    scrollGallery()
  }

  render() {
    return (
      <>
        <SearchBar
          onSetQuery={this.handleSetQuery}
          query={this.state.query}
          onGetPictures={this.handleGetPictures}
        />
        {false && <Loader />}
        <ImageGallery
          onOpenModal={this.handleOpenModal}
          pictures={this.state.pictures}
        />
        {this.state.isModalOpen && (
          <Modal
            modalImg={this.state.modalImg}
            onCloseModal={this.handleCloseModal}
          />
        )}
        <Button onLoadMore={this.handleLoadMore} />
      </>
    );
  }
}

export default App;
