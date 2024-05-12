import { FaAngleDown } from 'react-icons/fa';
export function EditOptionsInput({ name, options, inputHandler }) {
    return (
        <>
            <div className='relative w-full '>
                <select
                    name={name}
                    onChange={inputHandler}
                    placeholder='select'
                    className='w-full peer bg-white rounded border-2 bg-transparent px-3 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 placeholder-opacity-100 focus:border-cyan-400 appearance-none'
                    required>
                    <option value=''>select</option>
                    {options.map((item, index) => (
                        <option value={item} key={index} className='my-3'>{item}</option>
                    ))}
                </select>
                
                <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none peer-focus:rotate-180">
                    <FaAngleDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                </div>
            </div>
        </>
    )
}