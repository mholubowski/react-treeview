import React, {PropTypes} from 'react';

const TreeView = React.createClass({
  propTypes: {
    collapsed: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    nodeLabel: PropTypes.node.isRequired,
    treeViewItemOnClick: PropTypes.func
  },

  getInitialState() {
    return {collapsed: this.props.defaultCollapsed};
  },

  handleClick(...args) {
    this.setState({collapsed: !this.state.collapsed});
    if (this.props.onClick) {
      this.props.onClick(...args);
    }
  },

  render() {
    const {
      collapsed = this.state.collapsed,
      className = '',
      nodeLabel,
      children,
      ...rest,
    } = this.props;

    let arrowClassName = 'tree-view_arrow';
    let containerClassName = 'tree-view_children';
    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
    }

    const arrow =
      <div
        {...rest}
        className={className + ' ' + arrowClassName}
        onClick={this.handleClick}>
        ▾
      </div>;

    let itemClasses = "tree-view_item " + this.props.treeViewItemClasses;

    return (
      <div className="tree-view">
        <div className={itemClasses} onClick={this.props.treeViewItemOnClick}>
          {arrow}
          {nodeLabel}
        </div>
        <div className={containerClassName}>
          {children}
        </div>
      </div>
    );
  },
});

export default TreeView;
