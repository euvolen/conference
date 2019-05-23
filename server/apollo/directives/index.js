import AuthDirective from './auth'
import PrivateDirective from './private'
import PublicDirective from './public'
import ReviewDirective from './review'

export default  {
    review: ReviewDirective,
    public: PublicDirective,
    authorized: AuthDirective,
    private: PrivateDirective
}