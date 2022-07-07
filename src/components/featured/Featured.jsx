import React from 'react';

//styles
import '../featured/css/Featured.css';

const Featured = () => {
    return (
        <div>
            <div className='featured'>
                <div className="featuredItem">
                    <img
                        className='featuredItemImg'
                        src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""/>
                    <div className='featuredItemtitles'>
                        <h2>Warszawa</h2>
                        <p>5 mieszkań</p>
                    </div>
                </div>
                <div className="featuredItem">
                    <img
                        className='featuredItemImg'
                        src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""/>
                    <div className='featuredItemtitles'>
                        <h2>Poznań</h2>
                        <p>2 mieszkania</p>
                    </div>
                </div>
                <div className="featuredItem">
                    <img
                        className='featuredItemImg'
                        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                        alt=""/>
                    <div className='featuredItemtitles'>
                        <h2>Wrocław</h2>
                        <p>4 mieszkania</p>
                    </div>
                </div>
            </div>
            <div className='infoArea'>
                <h3 className='infoAreaTitle'>Nagłówek 1 - h3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum est quam praesentium impedit nisi, et exercitationem accusamus voluptatem veniam repellendus possimus soluta voluptatibus asperiores minus! Exercitationem repudiandae minus minima temporibus culpa odit consequatur laboriosam vitae obcaecati fugiat? Rem, delectus?</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum est quam praesentium impedit nisi, et exercitationem accusamus voluptatem veniam repellendus possimus soluta voluptatibus asperiores minus! Exercitationem repudiandae minus minima temporibus culpa odit consequatur laboriosam vitae obcaecati fugiat? Rem, delectus?</p>
            </div>
            <div className='infoArea'>
                <h4 className='infoAreaTitle'>Nagłówek 2 - h4</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum est quam praesentium impedit nisi, et exercitationem accusamus voluptatem veniam repellendus possimus soluta voluptatibus asperiores minus! Exercitationem repudiandae minus minima temporibus culpa odit consequatur laboriosam vitae obcaecati fugiat? Rem, delectus?</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum est quam praesentium impedit nisi, et exercitationem accusamus voluptatem veniam repellendus possimus soluta voluptatibus asperiores minus! Exercitationem repudiandae minus minima temporibus culpa odit consequatur laboriosam vitae obcaecati fugiat? Rem, delectus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum est quam praesentium impedit nisi, et exercitationem accusamus voluptatem veniam repellendus possimus soluta voluptatibus asperiores minus! Exercitationem repudiandae minus minima temporibus culpa odit consequatur laboriosam vitae obcaecati fugiat? Rem, delectus?</p>
            </div>
            <div className='infoArea'>
                <h4 className='infoAreaTitle'>Nagłówek 3 - h4</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum est quam praesentium impedit nisi, et exercitationem accusamus voluptatem veniam repellendus possimus soluta voluptatibus asperiores minus! Exercitationem repudiandae minus minima temporibus culpa odit consequatur laboriosam vitae obcaecati fugiat? Rem, delectus?</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum est quam praesentium impedit nisi, et exercitationem accusamus voluptatem veniam repellendus possimus soluta voluptatibus asperiores minus! Exercitationem repudiandae minus minima temporibus culpa odit consequatur laboriosam vitae obcaecati fugiat? Rem, delectus?</p>
            </div>
        </div>
    );
}

export default Featured;
