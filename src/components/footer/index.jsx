const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-color-accent">
      <p className="text-sm text-color-primary text-center">Panji &copy;{date}</p>
    </div>
  );
};
export default Footer;
