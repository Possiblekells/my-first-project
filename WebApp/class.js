function submit(){
  const submitName = document.getElementById("name").value;
  const submitCohort = document.getElementById("cohort").value;
  const submitBio = document.getElementById("bio").value;

  document.getElementById("myName").innerHTML=`My Name, ${submitName}`
  document.getElementById("Cohort").innerHTML=`My Cohort, ${submitCohort}`
  document.getElementById("myBio").innerHTML=`My Bio is, ${submitBio}`
}