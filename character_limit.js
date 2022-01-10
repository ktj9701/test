//글자수 제한
const area = document.querySelector("#footer-header");
                    const length = document.querySelector("#length");
                    const 길이 = document.querySelector("#길이");
                    const upcount = () => {
                        setTimeout(() => { }, 1000);
                        if (area.value.length > 60) {

                            document.getElementById("길이").style.color = "black";
                            document.getElementById("길이").style.fontSize = "16px";
                            document.getElementById("길이").style.fontWeight = "normal";
                            area.value = area.value.substr(0, 60);
                            length.textContent = `${area.value.length}`;
                        }
                        else
                            document.getElementById("길이").style.color = "black";
                        document.getElementById("길이").style.fontSize = "16px";
                        document.getElementById("길이").style.fontWeight = "normal";
                        length.textContent = `${area.value.length}`;
                    }
                    const downcount = () => {
                        setTimeout(() => { }, 1000);
                        if (area.value.length >= 60) {
                            if (event.keyCode == 8)
                                length.textContent = `${area.value.length}`;
                            else {
                                length.textContent = `${area.value.length}`;
                                document.getElementById("길이").style.color = "red";
                                document.getElementById("길이").style.fontSize = "22px";
                                document.getElementById("길이").style.fontWeight = "bolder";
                            }

                        }

                        else {

                            document.getElementById("길이").style.color = "black";
                            document.getElementById("길이").style.fontSize = "16px";
                            document.getElementById("길이").style.fontWeight = "normal";
                            length.textContent = `${area.value.length}`;
                        }
                    }


                    area.addEventListener("keyup", upcount)
                    area.addEventListener("keydown", downcount)