const a = document.querySelector(`#time`);
            let timeid = 0;

            a.textContent = `${new Date().toLocaleString()}`;
            timeid = setInterval(() => {
                a.textContent = `${new Date().toLocaleString()}`;
            }, 1000);

            function timer() {
                const xmasDay = new Date("2021-12-23");
                const currDay = new Date();

                let diff = xmasDay - currDay;
                const diffDays = Math.floor((xmasDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24));
                diff -= diffDays * (1000 * 60 * 60 * 24);
                const diffHours = Math.floor(diff / (1000 * 60 * 60));
                diff -= diffHours * (1000 * 60 * 60);
                const diffMin = Math.floor(diff / (1000 * 60));
                diff -= diffMin * (1000 * 60);
                const diffSec = Math.floor(diff / 1000);

                a.textContent = `${diffDays < 10 ? `0${diffDays}` : diffDays}일 ${diffHours < 10 ? `0${diffHours}` : diffHours}시간 ${diffMin < 10 ? `0${diffMin}` : diffMin}분 ${diffSec < 10 ? `0${diffSec}` : diffSec}초`;


                timeid = setInterval(() => {
                    const currDay = new Date();

                    let diff = xmasDay - currDay;
                    const diffDays = Math.floor((xmasDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24));
                    diff -= diffDays * (1000 * 60 * 60 * 24);
                    const diffHours = Math.floor(diff / (1000 * 60 * 60));
                    diff -= diffHours * (1000 * 60 * 60);
                    const diffMin = Math.floor(diff / (1000 * 60));
                    diff -= diffMin * (1000 * 60);
                    const diffSec = Math.floor(diff / 1000);

                    a.textContent = `${diffDays < 10 ? `0${diffDays}` : diffDays}일 ${diffHours < 10 ? `0${diffHours}` : diffHours}시간 ${diffMin < 10 ? `0${diffMin}` : diffMin}분 ${diffSec < 10 ? `0${diffSec}` : diffSec}초`;
                }, 1000);
            }