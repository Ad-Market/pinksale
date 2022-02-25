import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTimer } from "react-timer-hook";

import Collapse from "../components/Collapse";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Presale", "Liquidity", "Team Vesting", "Unlocked", "Grey"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["#FF4B72", "#008CE9", "#00D0E3", "#FFC234", "#7C8FA9"],
    },
  ],
};

const d = new Date(2022, 2, 3, 5, 20, 30, 0);

const Landing = () => {
  const {
    seconds,
    minutes,
    hours,
    days,
    // isRunning,
    // start,
    // pause,
    // resume,
    // restart,
  } = useTimer({
    expiryTimestamp: d,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div id="landing">
      <div className="container-fluid px-0">
        <div className="row gx-sm-4 gx-0 ">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-md-row flex-column">
                  <div className="flex-shrink-0">
                    <img
                      className="coin-icon"
                      src="./assets/img/aio.png"
                      alt="aio"
                    />
                  </div>
                  <div className="right">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h1>AIO DeFi Presale</h1>
                        <div className="badge green">KYC</div>
                        <div className="badge blue">Audit</div>
                      </div>
                      <div className="incoming">
                        <img src="./assets/vectors/lock.svg" alt="lock" />
                        Upcoming
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-2 share">
                      <a href="#0">
                        <img src="./assets/vectors/website.svg" alt="website" />
                      </a>
                      <a href="#0">
                        <img src="./assets/vectors/twitter.svg" alt="twitter" />
                      </a>
                      <a href="#0">
                        <img
                          src="./assets/vectors/telegram.svg"
                          alt="telegram"
                        />
                      </a>
                    </div>
                    <p className="mt-3">
                      AIO DeFi AIO – All In One As the name implies AIO
                      encompasses every aspect of DEFI. AIO delivers the
                      opportunity for investors to have access to utilities such
                      as staking, swap , NFTs, P2E game in an all in one token.
                      Our staking platform is ready and you can stake your AIO
                      tokens at launch for up to 200% APY:
                      https://stake.aiodefi.com/ 🛡Solidproof Audit: <br />
                      https://github.com/solidproof/projects/blob/main/AioDefi/SmartContract_Audit_Solidproof_AioDefi.pdf
                    </p>
                  </div>
                </div>
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>Presale Address</td>
                        <td className="text-end">
                          <a
                            href="#0"
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            0x567a885f5f3362D4C56C8466050ca751Bb61888a
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Token Name</td>
                        <td className="text-end">AIO DeFi</td>
                      </tr>
                      <tr>
                        <td>Token Symbol</td>
                        <td className="text-end">AIO</td>
                      </tr>
                      <tr>
                        <td>Token Decimals</td>
                        <td className="text-end">9</td>
                      </tr>
                      <tr>
                        <td>Token Address</td>
                        <td className="text-end">
                          <a
                            className="mr-1"
                            href="https://bscscan.com/address/0xAAc3580dbFf4b0D5E2517E7610D78EE5FA97D197"
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            0xAAc3580dbFf4b0D5E2517E7610D78EE5FA97D197
                          </a>
                          <br />
                          <p className="help is-info">
                            (Do not send BNB to the token address!)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>Total Supply</td>
                        <td className="text-end">1,000,000,000 AIO</td>
                      </tr>
                      <tr>
                        <td>Tokens For Presale</td>
                        <td className="text-end">112,500,000 AIO</td>
                      </tr>
                      <tr>
                        <td>Tokens For Liquidity</td>
                        <td className="text-end">49,725,000 AIO</td>
                      </tr>
                      <tr>
                        <td>Presale Rate</td>
                        <td className="text-end">1 BNB = 75,000 AIO</td>
                      </tr>
                      <tr>
                        <td>Listing Rate</td>
                        <td className="text-end">1 BNB = 65,000 AIO</td>
                      </tr>
                      <tr>
                        <td>Initial Market Cap (estimate)</td>
                        <td className="text-end">$2,271,504</td>
                      </tr>
                      <tr>
                        <td>Soft Cap</td>
                        <td className="text-end">750 BNB</td>
                      </tr>
                      <tr>
                        <td>Hard Cap</td>
                        <td className="text-end">1500 BNB</td>
                      </tr>
                      <tr>
                        <td>Unsold Tokens</td>
                        <td className="text-end">Burn</td>
                      </tr>
                      <tr>
                        <td>Presale Start Time</td>
                        <td className="text-end">2022.03.03 15:00 (UTC)</td>
                      </tr>
                      <tr>
                        <td>Presale End Time</td>
                        <td className="text-end">2022.03.05 15:00 (UTC)</td>
                      </tr>
                      <tr>
                        <td>Listing On</td>
                        <td className="text-end">
                          <a
                            className="mr-1"
                            href="https://pancakeswap.finance/swap?outputCurrency=0xAAc3580dbFf4b0D5E2517E7610D78EE5FA97D197"
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            Pancakeswap
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Liquidity Percent</td>
                        <td className="text-end">51%</td>
                      </tr>
                      <tr>
                        <td>Liquidity Lockup Time</td>
                        <td className="text-end">90 days after pool ends</td>
                      </tr>
                      <tr>
                        <td>Total Team Vesting Tokens</td>
                        <td className="text-end">600,000,000 AIO</td>
                      </tr>
                      <tr>
                        <td>First Release After Listing (days)</td>
                        <td className="text-end">7 days</td>
                      </tr>
                      <tr>
                        <td>First Release For Team</td>
                        <td className="text-end">10%</td>
                      </tr>
                      <tr>
                        <td>Tokens release each cycle</td>
                        <td className="text-end">10% each 7 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Collapse title="Team Vesting info (Estimate from end time)">
                  <div className="table-container px-lg-4">
                    <table className="mt-0">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Address (79)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                          {
                            hex: "0x567a885f5f3362D4C56C8466050ca751Bb61888a",
                          },
                        ].map((el, idx) => {
                          return (
                            <tr key={"team-vesting" + idx}>
                              <td>{idx + 1}</td>
                              <td>
                                <div className="d-inline-flex">
                                  {el.hex}
                                  <img
                                    className="copy"
                                    src="./assets/vectors/copy.svg"
                                    alt="copy"
                                  />
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="pagination">
                    <button disabled className="prev">
                      <img src="./assets/vectors/arrow.svg" alt="arrow" />
                    </button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className="next">
                      <img src="./assets/vectors/arrow.svg" alt="arrow" />
                    </button>
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-head">Token Metrics</div>
              <div className="card-body">
                <div className="mx-auto" style={{ maxWidth: 400 }}>
                  <Doughnut
                    options={{ plugins: { legend: { position: "right" } } }}
                    data={data}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card buy">
              <div className="card-body">
                <div className="alert alert-warning">
                  Make sure the website is pinksale.finance!
                </div>
                <div className="text-center">Presale Starts In</div>

                <div className="timer lg mt-1">
                  <div>{days}</div>
                  <div>{hours}</div>
                  <div>{minutes}</div>
                  <div>{seconds}</div>
                </div>

                <div className="pb-4">
                  <div className="progress-bar mt-3 mb-2">
                    <div className="progess"></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>0 BNB</div>
                    <div>400 BNB</div>
                  </div>
                </div>

                <div className="countdown my-3 d-flex justify-content-between align-items-center">
                  <div>Countdown to public</div>

                  <div className="timer ms-3 sm justify-content-end mt-1">
                    <div>{days}</div>
                    <div>{hours}</div>
                    <div>{minutes}</div>
                    <div>{seconds}</div>
                  </div>
                </div>

                <div className="form-control">
                  <label htmlFor="amount" className="fw-500">
                    Amount
                  </label>
                  <div className="input">
                    <input type="number" step={0.1} placeholder="0.0" />
                    <button className="max">MAX</button>
                  </div>
                </div>
                <button
                  disabled
                  className="btn d-inline-flex align-items-center mt-3"
                >
                  <img src="./assets/vectors/tick.svg" alt="tick" />
                  Buy
                </button>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-body">
                <div className="table-container">
                  <table className="mt-0">
                    <tbody>
                      <tr>
                        <td>Status</td>
                        <td className="text-end text-pink">incoming</td>
                      </tr>
                      <tr>
                        <td>Sale type</td>
                        <td className="text-end text-pink">Whitelist Only</td>
                      </tr>
                      <tr>
                        <td>Minimum Buy</td>
                        <td className="text-end">0.1 BNB</td>
                      </tr>
                      <tr>
                        <td>Maximum Buy</td>
                        <td className="text-end">4 BNB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
