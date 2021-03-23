import React, { Component } from 'react';
import Faq from './Faq'
import { toast } from 'react-toastify';
import Pagination from 'react-js-pagination';
import { saveEverFAQs } from './helpers';
import CardColumns from 'react-bootstrap/CardColumns'
import { validate } from 'react-email-validator';


const customStyles = {
    content: {
        display: 'none'
    }
};

export default class Faqs extends Component {
    state = {
        question: "",
        answer: "",
        active_page: null,
    }

    
    componentDidMount() {
        
    }

    constructor(props) {
        super(props);
  
        this.handlePageChange = this._handlePageChange.bind(this);
    }

    _handlePageChange(active_page) {
        const start = (active_page - 1) * 10;
        const end = start + 9;
  
        const faqs = this.getPaginatedFAQs(start, end);
  
        this.setState({faqs: faqs, active_page: active_page})
    }
  
    getPaginatedFAQs(start, end) {
        const faqs = [];
        for(let i=start; i <= end; i++) {
            faqs.push(this.props.faqs[i]);
        }

        return faqs;
    }

    questionStatifier(e) {
        const question = e.target.value
        this.setState({question: question})
    }
    answerStatifier(e) {
        const answer = e.target.value
        this.setState({answer: answer})
    }

    validateFAQ() {
        if(this.state.question.length <= 0) {
            return false;
        }
        if(this.state.answer.length <= 0) {
            return false;
        }
        return true;
    }

    validateWalletAddress() {
        const correct_wallet_1 = "6b5e6Ys64SNOVJQ396ewkrkL4VQ5sBTFOT8-QXxCgNE"
        const correct_wallet_2 = "h-Bgr13OWUOkRGWrnMT0LuUKfJhRss5pfTdxHmNcXyw"

        if(this.props.wallet_address == correct_wallet_1 || this.props.wallet_address == correct_wallet_2) {
            
            return true;
        } else {
           
            return false;
        }
    }
    

    onSubmit(e) {
        e.preventDefault();
        if(this.validateFAQ() == true && this.validateWalletAddress() == true) {
            saveEverFAQs(this.state.question, this.state.answer);
            this.props.history.push('/')
        } else {
            toast("Please Make Sure All Required Data Is Present Before Submission!", { type: toast.TYPE.ERROR });
        }
    }

    render() {
        const faqs = this.props.faqs.map((faq) => {
            return <Faq faq={faq} />;
        });

        const visible_or_not = this.validateWalletAddress() ? {} : customStyles.content;

        return (
            <>
                <header className="page-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"/>
                        </div>
                    </div>
                </header>
                <div className="main-content">
                    <div className="row">   
                        <div style={visible_or_not} className="col-md-3">
                            <div className="card m-0">
                                <div className="card-body">
                                    <div className="form-group">
                                        Question: <input style={{marginBottom: "10px"}} className="form-control" onChange={(e) => {this.questionStatifier(e)}}/>
                                        Answer: <input style={{marginBottom: "10px"}} className="form-control" onChange={(e) => {this.answerStatifier(e)}}/>
                                        <button style={{marginLeft: "170px"}} type="button" id="submit" name="submit" className="btn btn-primary float-right" onClick={ (event) => { this.onSubmit(event) }}>Submit Question</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gutters col-md-9">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">Frequently Asked Questions</div>
                                        <div className="card-body">
                                            <div className="table-responsive" style={{width: '100%', minHeight: '600px'}}>
                                                <CardColumns>
                                                    {faqs}
                                                </CardColumns>
                                                <Pagination
                                                    activePage={this.state.active_page}
                                                    itemsCountPerPage={10}
                                                    totalItemsCount={this.props.faqs.length}
                                                    pageRangeDisplayed={5}
                                                    onChange={this.handlePageChange}
                                                    itemClass='page-item'
                                                    linkClass='page-link'
                                                    activeClass='active'
                                                    activeLinkClass=''
                                                />
                                        </div>
                                    </div>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            </>
        );
    }
}