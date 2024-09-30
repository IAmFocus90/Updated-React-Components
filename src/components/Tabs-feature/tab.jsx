export const Tab = ({ tabsContent, showTab, currIndex, showIndex }) => {
  return (
    <div onClick={showTab} className={ `tab ${currIndex === showIndex ? "active" : ""}`}>
      <span>{tabsContent.label}</span>
    </div>
  );
};
