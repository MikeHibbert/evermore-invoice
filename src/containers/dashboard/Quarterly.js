import React from 'react';

const QuarterlyActivity = function(props) {
    return(
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card">
                <div className="card-header">Quarterly Activity</div>
                <div className="card-body height2">
                    <div className="chartist custom-one">
                    <div className="booking-source-donut"></div>
                    
                    <div className="badge-group-chartist-shades text-center">

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default QuarterlyActivity;