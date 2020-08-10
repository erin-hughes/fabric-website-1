import React from 'react';
import './Dropdown.css';
import caretDownIcon from '../../res/caret--down.svg';
import caretUpIcon from '../../res/caret--up.svg';


class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentValue: this.props.currentValue,
            list: this.props.list,
            listOpen: false,
            title: this.props.title
        }

        this.selectOption = this.selectOption.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentValue !== prevProps.currentValue) {
            this.setState({
                currentValue: this.props.currentValue
            });
        }
    }



    selectOption(e) {
        this.props.onSelect(e);
        this.handleClick();
    }

    handleClick() {
        if (!this.state.listOpen) {
          // attach/remove event handler
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState(prevState => ({
            listOpen: !prevState.listOpen,
         }));
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
          return;
        }
        
        this.handleClick();
      }
    

    render() {
        let caretIcon = caretDownIcon;
        if (this.state.listOpen === true) {
            caretIcon = caretUpIcon;
        }

        return (
            <div className="dropdown-wrapper">
                <div className="dropdown-header">
                    <div className="dropdown-header-title">{this.state.title}</div>
                </div>
                <div className="dropdown-current-version" ref={node => { this.node = node; }}
                    onClick={this.handleClick} 
                    tabindex="0.1" >{this.state.currentValue}</div>
                <img src={caretIcon} className="caret-icon"></img>
                {this.state.listOpen && <ul className="dropdown-list">
                    {this.state.list.map((item) => (
                        <li className="dropdown-list-item" key={item.id} onClick={this.selectOption}>{item.title}</li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default Dropdown;
