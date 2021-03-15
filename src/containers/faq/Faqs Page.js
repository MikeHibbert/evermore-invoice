import React, { Component } from 'react';
import Faq from './Faq'
import { toast } from 'react-toastify';
import { Pagination } from 'react-js-pagination';
import { saveEverAnswer, saveEverQuestion } from './helpers';

export default class Faqs extends Component {
    state = {
        qusername: "",
        question: "",
        ausername: "",
        selected_question: null,
        answer: "",
        active_page: null
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

    validateQuestion() {
        if(this.state.qusername.length <= 0) {
            return false;
        }
        if(this.state.question.length <= 0) {
            return false;
        }
        return true;
    }

    validateAnswer() {
        if(this.state.ausername.length <= 0) {
            return false;
        }
        if(this.state.answer.length <= 0) {
            return false;
        }
        if(this.state.selected_question == null || this.state.selected_question == undefined || this.state.selected_question == "") {
            return false;
        }
        return true;
    }

    onSubmitQuestion(e) {
        e.preventDefault();
        if(this.validateQuestion() == true) {
            saveEverQuestion(this.state.qusername, this.state.question);
            this.props.history.push('/')
        } else {
            toast("Please Make Sure All Required Data Is Present Before Submission!", { type: toast.TYPE.ERROR });
        }
    }
    onSubmitAnswer(e) {
        e.preventDefault();
        if(this.validateAnswer() == true) {
            saveEverAnswer(this.state.ausername, this.state.answer, this.state.selected_question);
            this.props.history.push('/')
        } else {
            toast("Please Make Sure All Required Data Is Present Before Submission!", { type: toast.TYPE.ERROR });
        }
    }
    render() {
        const faqs = this.props.faqs.map((faq) => {
            return <Faq faq={faq} />;
        });

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
                    <div style={{ width: '20%', display:'inline-block' }}>
                        <div className="card m-0">
                            <div className="card-body">
                                <div className="form-group">
                                    <h5>Ask a Question: </h5>
                                    <input className="form-control">

                                    </input>
                                    <button type="button" id="submit" name="submit" className="btn btn-primary float-right" onClick={ (event) => { this.onSubmit(event) }}>Submit Question</button>
                                </div>
                                <div className="form-group">
                                    <h5>Answer a Question: </h5>
                                    <select>

                                    </select>
                                    <input className="form-control">

                                    </input>
                                    <button type="button" id="submit" name="submit" className="btn btn-primary float-right" onClick={ (event) => { this.onSubmit(event) }}>Submit Answer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">Frequently Asked Questions</div>
                                    <div className="card-body">
                                        <div className="table-responsive" style={{height: '100%', minHeight: '600px'}}>
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Username of Asker</th>
                                                        <th>Question</th>
                                                        <th>Username of Answerer</th>
                                                        <th>Answer</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {faqs}
                                                </tbody>
                                            </table>
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
            </>
        );
    }
}