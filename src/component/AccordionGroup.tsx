import React, { useState } from "react";

function AccordionGroup() {
   const [hide, setShow] = useState(false);

   return (
      <div className="grid">
         <div>
            <h1>It's been raining in Manila</h1>
         </div>
         <div className="accordion-container">
            <div className="script">
               <header>
                  <p className="title">1st Verse</p>
                  <button id="1" className="btn" onClick={() => setShow(!hide)}>
                     +
                  </button>
               </header>

               <div className="script-body">
                  {hide ? (
                     <p>
                        It's been raining in Manila, hindi ka ba nilalamig? And
                        it's been raining in Manila, hindi ka ba nilalamig? But
                        if it's raining in Manila, hindi kita maririnig
                        (Nakahiga, mag-isang nanginginig) So, I'll be waiting in
                        Manila kahit 'di ka na babalik. Maulan ba sa inyo 'pag
                        bumubuhos dito? Paumanhin, at mukhang hindi ko
                        Masasabayan ang 'yong yapak sa pagngiti at pag-iyak Sa
                        paglipad at pagbagsak ng araw-araw Sa pagpikit na lang
                        kita matititigan sa mata Sa panaginip na magpapaligaw.
                     </p>
                  ) : null}
               </div>
            </div>
            <div className="script">
               <header>
                  <p className="title">Pre-chorus and Chorus</p>
                  <button id="2" className="btn" onClick={() => setShow(!hide)}>
                     +
                  </button>
               </header>

               <div className="accordion-body">
                  {hide ? (
                     <p>
                        Kamusta ka na? Kahit 'wag nang sagutin 'Di ba nawala ang
                        kintab ng bituin? Sana gano'n ka nga pa rin 'Cause it's
                        been raining in Manila, hindi ka ba nilalamig? Mahirap
                        bang mag-isang nanginginig? And it's been raining in
                        Manila, hindi ka ba nilalamig 'Pag wala ang mga tala?
                        Oh-oh-oh Madilim ba ang mundo?
                     </p>
                  ) : null}
               </div>
            </div>
            <div className="script">
               <header>
                  <p className="title">2nd Verse</p>
                  <button id="3" className="btn" onClick={() => setShow(!hide)}>
                     +
                  </button>
               </header>

               <div className="accordion-body">
                  {hide ? (
                     <p>
                        May kulang ba sa inyo na naiwan dito? Aanhin ang ulan sa
                        paradiso? Sakali madulas ay dati malapit ka Ngayon,
                        walang kahati ng init 'pag maulan Sana naman tumigil na
                        ang ulan
                     </p>
                  ) : null}
               </div>
            </div>
            <div className="script">
               <header>
                  <p className="title">Pre-chorus and Chorus</p>
                  <button id="4" className="btn" onClick={() => setShow(!hide)}>
                     +
                  </button>
               </header>

               <div className="accordion-body">
                  {hide ? (
                     <p>
                        Kamusta ka na? Kahit 'wag nang sagutin 'Di ba nawala ang
                        kintab ng bituin? Sana gano'n ka nga pa rin 'Cause it's
                        been raining in Manila, hindi ka ba nilalamig? Mahirap
                        bang mag-isang nanginginig? And it's been raining in
                        Manila, hindi ka ba nilalamig 'Pag wala ang mga tala?
                        Oh-oh-oh Madilim ba ang mundo?
                     </p>
                  ) : null}
               </div>
            </div>
            <div className="script">
               <header>
                  <p className="title">Final Pre-Chorus and Chorus</p>
                  <button id="5" className="btn" onClick={() => setShow(!hide)}>
                     +
                  </button>
               </header>

               <div className="accordion-body">
                  {hide ? (
                     <p>
                        Kamusta ka na? Kahit 'wag nang sagutin 'Di ba nawala ang
                        kintab ng bituin? Sana gano'n ka nga pa rin But if it's
                        raining in Manila, hindi kita maririnig Nakahiga,
                        mag-isang nanginginig So, I'll be waiting in Manila
                        kahit 'di ka na babalik Andiyan lang ang mga tala,
                        oh-oh-oh Andiyan lang ang mga tala saan mang sulok ng
                        mundo
                     </p>
                  ) : null}
               </div>
            </div>
         </div>
      </div>
   );
}

export default AccordionGroup;
