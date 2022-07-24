import React from "react";
import "../../css/styles.css";
import data from "./Publications.json";
import Publication from "./Publication";
import { getBadgeColor } from "../../utility";
import { MathJax } from "better-react-mathjax";

const Publications = () => {
  return (
    <MathJax>
      <div className="row alignBaseline">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <p className="headingFontSize">Copyright Notice</p>
          <p className="contentFontSize">Copyright belongs to the publisher in case of published articles. Copyright belongs to the author or authors in all other cases.</p>
        </div>
      </div>
      <Publication heading="Preprints" data={data.preprints} getBadgeColor={getBadgeColor} />
      <div className="row alignBaseline" id="thesis">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <p className="headingFontSize">Thesis</p>
          <ul>
            <li>
              <span className="contentPadding"><em>Sequential Controlled Sensing to Detect an Anomalous Process</em></span> 
              <span className="badge rounded-pill abstractBadge abstractMargin" data-bs-toggle="collapse" data-bs-target="#thesisAbstract" aria-expanded="false" aria-controls="thesisAbstract" style={{ backgroundColor: getBadgeColor("abstract") }}>abstract</span>             
              <a href="../media/2021/11/main.pdf" target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor("paper") }}>pdf</span></a>
              <a href="https://github.com/pnkarthik/phd-thesis" target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor("weblink") }}>source</span></a>
              <a href="https://etd.iisc.ac.in/handle/2005/5514" target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor("weblink") }}>etd iisc</span></a>
              <br />
              <div className="collapse abstractContentPadding" id="thesisAbstract">
                <div className="card card-body">
                  <p>
                    In this thesis, we study the problem of identifying an anomalous arm in a multi-armed bandit
                    as quickly as possible, subject to an upper bound on the error probability. Also known as odd
                    arm identification, this problem falls within the class of optimal stopping problems in decision
                    theory and can be embedded within the framework of active sequential hypothesis testing. Prior
                    works on odd arm identification dealt with independent and identically distributed observations
                    from each arm. We provide the first known extension to the case of Markov observations from
                    each arm. Our analysis and results are in the asymptotic regime of vanishing error probability.
                  </p>
                  <p>
                    We associate with each arm an ergodic discrete time Markov process that evolves on a
                    common, finite state space. The notion of anomaly is that the transition probability matrix
                    (TPM) of the Markov process of one of the arms (the odd arm) is some $P_1$, and that of each
                    non-odd arm is a different $P_2$, $P_2 \neq P_1$. A learning agent whose goal it is to find the odd arm
                    samples the arms sequentially, one at any given time, and observes the state of the Markov
                    process of the sampled arm. The Markov processes of the unobserved arms may either remain
                    frozen at their last observed states until their next sampling instant (rested arms) or continue
                    to undergo state evolution (restless arms). The TPMs $P_1$ and $P_2$ may be known to the learning
                    agent beforehand or unknown. We analyse the following cases: (a) rested arms with TPMs
                    unknown, (b) restless arms with TPMs known, and (c) restless arms with TPMs unknown.
                    For each of these cases, we first present an asymptotic lower bound on the growth rate of the
                    expected time required to find the odd arm, and subsequently devise a sequential arm selection
                    policy which we show achieves the lower bound and is therefore asymptotically optimal.
                  </p>
                  <p>
                    A key ingredient in our analysis of the setting of rested arms is the observation that for
                    the Markov process of each arm, the long term fraction of entries into a state is equal to the
                    long term fraction of exits from the state (global balance). When the arms are restless, it is
                    necessary for the learning agent to keep track of the time since each arm was last sampled (arm’s
                    delay) and the state of each arm when it was last sampled (arm’s last observed state). We show
                    that the arm delays and the last observed states form a controlled Markov process which is
                    ergodic under any stationary arm selection policy that picks each arm with a strictly positive
                    probability. Our approach of considering the delays and the last observed states of all the arms
                    jointly offers a global perspective of the arms and serves as a ‘lift’ from the local perspective of
                    dealing with the delay and the last observed state of each arm separately, one that is suggested
                    by the prior works. Lastly, when the TPMs are unknown and have to be estimated along the
                    way, it is important to ensure that the estimates converge almost surely to their true values
                    asymptotically, i.e., the system is identifiable. We show identifiability follows from the ergodic
                    theorem in the rested case, and provide sufficient conditions for it in the restless case.
                  </p>
                </div>
              </div>
              <a href="/" rel="noopener noreferrer" class="nameFontColor"><strong>Karthik Periyapattana Narayanaprasad</strong></a><br />
              <span>Ph.D. thesis submitted to the <a href="https://ece.iisc.ac.in" target="_blank" rel="noopener noreferrer">Department of Electrical Communication Engineering</a>, <a href="https://iisc.ac.in" target="_blank" rel="noopener noreferrer">Indian Institute of Science</a>. Nov 2021</span><br />
            </li>
          </ul>
        </div>
      </div>
      <Publication heading="Journal Publications" data={data.journals} getBadgeColor={getBadgeColor} />
      <Publication heading="Conference Publications" data={data.conferencePublications} getBadgeColor={getBadgeColor} />
    </MathJax>
  );
};

export default Publications;