const DEV_ENV = process.env.NEXT_PUBLIC_NODE_ENV;

export default function envBadge() {  
    switch(DEV_ENV) {
        case 'production':
            return null;
            break;
        case 'development':
            return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                            {DEV_ENV} instance
                        </span>
                    </div>);
            break;
        case 'qa':
                return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                {DEV_ENV} instance
                            </span>
                        </div>);
                break; 
        case 'uat':
            return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                            {DEV_ENV} instance
                        </span>
                    </div>);
            break;
        case 'stage':
                return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                {DEV_ENV} instance
                            </span>
                        </div>);
                break;
        default:
          return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        {DEV_ENV} instance
                    </span>
                </div>);
          
    }
}
