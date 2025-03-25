import React from 'react'

function generaNumeroAleatorio(max = 20) {
  return Math.floor(Math.random() * max) + 1;
}

function buildSum(max = 20) {

  const primerNumero = generaNumeroAleatorio(max);
  const segundoNumero = generaNumeroAleatorio(primerNumero - 1);

  return [primerNumero, segundoNumero];
}

const IncompleteSum = () => {
  return (
    <div className="flex justify-between flex-row max-w-3xl">
      {Array.from({ length: 3 }).map((_, i) => {
        const [firstNumber, secondNumber] = buildSum();
        return (
          <div key={i} className="flex-col w-30 debug mb-10 flex">
						<div className="text-3xl text-right">{firstNumber}</div>
            <div className="flex justify-between">
              <div>+</div>
              <div className="text-6xl border border-dashed rounded-md border w-20 h-10"></div>
            </div>
						<div className="border-t-1 border-black text-3xl mt-3 text-right">{firstNumber + secondNumber}</div>
          </div>
        );
      })}
    </div>
  );
}

export default IncompleteSum;
