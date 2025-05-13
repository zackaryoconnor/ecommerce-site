import { Link } from 'react-router-dom'
import { useState } from 'react'

function MoreInfoComponent() {
  return (
    <div className="w-full mt-16">
      <h2 className="text-lg font-semibold mt-8 mb-2">Shipping & Returns:</h2>
      <p className="text-sm text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        accusantium quidem, minima accusamus nisi enim alias doloribus ipsum
        voluptatibus excepturi! Nam nisi voluptatem quod delectus?
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">size:</h2>
      <p className="text-sm text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet.</p>

      <h2 className="text-lg font-semibold mt-8 mb-2">Materials & Care:</h2>
      <p className="text-sm text-gray-700 leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        dolore repellendus vitae.
      </p>
    </div>
  )
}

export default MoreInfoComponent
