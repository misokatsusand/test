@charset "UTF-8";
/* タブレット向けレイアウト */
@media all and (max-width: 1000px) {
  html {
    font-size: 55%;
  }
}

/* モバイル向けレイアウト */
@media all and (max-width: 670px) {
  html {
    font-size: 47%;
  }
  .user {
    display: none;
  }
  .menu-modal {
    background-color: white;
    width: 87%;
    height: 430px;
  }
  .menu-modal ul li {
    padding: 7px 0 3px 10px;
    border-bottom: 1px dashed #333;
  }
  .main .side-list-left {
    float: none;
    margin: 0px 0 15px 1%;
    width: 88%;
    display: flex;
    flex: auto;
    flex-wrap: wrap;
  }
  .main .side-list-left img {
    height: 100%;
    width: 45%;
    margin: 3px 2.5%;
  }
  .main .container {
    width: 88%;
    margin: 0 15% 0 0.5%;
  }
  .main .side-list-right .company {
    height: 40px;
  }
  .main .side-list-right .company p {
    width: 30px;
  }
}
