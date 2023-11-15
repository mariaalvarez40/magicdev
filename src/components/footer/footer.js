import "../footer/footer.scss";

  function Footer(props){
    const {copyright} = props;
    const currentYear = new Date().getFullYear();

    return (
      <div className="footer">
        &copy; {currentYear} {copyright}
      </div>
    );
  }
  export default Footer; 