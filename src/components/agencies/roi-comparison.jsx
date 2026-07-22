import React from 'react';
import Link from 'next/link';

const RoiComparison = () => {
    return (
        <section className="price-area pt-100 pb-120 gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="section-title text-center mb-50">
                            <h2>The ROI of Efficiency</h2>
                            <p>Spend Less Time on Fulfillment, More Time on Growth.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="table-responsive" style={{background: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
                            <table className="table table-borderless">
                                <thead>
                                    <tr style={{borderBottom: '2px solid #eee'}}>
                                        <th style={{width: '40%', paddingBottom: '20px', fontSize: '20px'}}>Comparison</th>
                                        <th style={{width: '30%', paddingBottom: '20px', fontSize: '20px', color: '#777'}}>The Old Way</th>
                                        <th style={{width: '30%', paddingBottom: '20px', fontSize: '20px', color: 'var(--lz-primary-alt)', fontWeight: 'bold'}}>The Linkaza Way</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{borderBottom: '1px solid #f5f5f5'}}>
                                        <td style={{padding: '20px 0', fontWeight: '600'}}>Time per Campaign</td>
                                        <td style={{padding: '20px 0'}}>10-15 Hours</td>
                                        <td style={{padding: '20px 0', color: 'var(--lz-primary-alt)', fontWeight: 'bold'}}>1-2 Hours</td>
                                    </tr>
                                    <tr style={{borderBottom: '1px solid #f5f5f5'}}>
                                        <td style={{padding: '20px 0', fontWeight: '600'}}>Publisher Quality</td>
                                        <td style={{padding: '20px 0'}}>Inconsistent</td>
                                        <td style={{padding: '20px 0', color: 'var(--lz-primary-alt)', fontWeight: 'bold'}}>Vetted & High-Quality</td>
                                    </tr>
                                    <tr style={{borderBottom: '1px solid #f5f5f5'}}>
                                        <td style={{padding: '20px 0', fontWeight: '600'}}>Management</td>
                                        <td style={{padding: '20px 0'}}>Spreadsheets & Emails</td>
                                        <td style={{padding: '20px 0', color: 'var(--lz-primary-alt)', fontWeight: 'bold'}}>Centralized Dashboard</td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: '20px 0', fontWeight: '600'}}>Costs</td>
                                        <td style={{padding: '20px 0'}}>Unpredictable</td>
                                        <td style={{padding: '20px 0', color: 'var(--lz-primary-alt)', fontWeight: 'bold'}}>Transparent Pay-As-You-Go</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div className="text-center mt-40">
                                <a href="https://app.linkaza.com/register" target="_blank" rel="noopener noreferrer" className="btn btn-gradient btn-gradient-02">
                                    Start Saving Time Today
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoiComparison;