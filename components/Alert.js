/*
 *
 * Title: Alert
 * Description: --
 * Author: Saymon
 * Date: 25 November 2021 (Thursday)
 *
 */
import { IoWarningOutline } from 'react-icons/io5';
import { BiErrorCircle } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
function Alert({ type = 'warning', title = 'Alert title', action, className }) {
  const AlertIcon =
    type === 'error'
      ? BiErrorCircle
      : type === 'success'
      ? BsCheckCircle
      : IoWarningOutline;
  return (
    <div
      className={`flex flex-col sm:flex-row gap-2.5 items-stretch justify-between rounded-md overflow-hidden p-1.5 border _alert ${type} ${
        className || ''
      }`}
    >
      <div className="flex items-stretch flex-grow">
        <div
          className={`min-h-[32px] min-w-[32px] max-h-[50] max-w-[50px] flex-shrink-0 rounded-md overflow-hidden p-1.5 _flex_center text-white _alert_icon_wrapper`}
          style={{ aspectRatio: '1/1' }}
        >
          <AlertIcon className="w-full h-full" />
        </div>
        <div className="px-2.5 flex items-center">
          <h6 className="_h6 font-medium text-sm">{title}</h6>
        </div>
      </div>
      {action && (
        <div className="flex flex-shrink-0 justify-end sm:justify-start items-center">
          {action}
        </div>
      )}
    </div>
  );
}

export default Alert;
