function MainTitle({mainl, mainr, mainb}) {
  return (
    <div className="MainTitle">
        <h1 className='Mt-Top'>{mainl} <span>{mainr}</span></h1>
        <br />
        <h6 className='Mt-Bottom'>{mainb}</h6>
    </div>
  )
}


export default MainTitle

